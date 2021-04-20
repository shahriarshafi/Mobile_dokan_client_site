import React, { useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { useForm } from "react-hook-form";
import { Link, useParams } from 'react-router-dom';
import { ServiceContext, UserContext } from '../../../App';
import StripePayment from '../StripePayment/StripePayment';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

const UserDashboard = () => {
    const [service, setService] = useContext(ServiceContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [shippingData, setShippingData] = useState(null);
    const { id } = useParams();
    // Show Service name & Price
    const [services, setServices] = useState([]);
    const [serviceDetail, setServiceDetail] = useState({
        name: "",
        price: "",
        image: ""

    });
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const [isAdmin, setIsAdmin] = useState([]);
    const [user, setUser] = useState({
        admin: false,
    });


    useEffect(() => {
        fetch('https://intense-escarpment-18189.herokuapp.com/adminEmail')
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    const m = isAdmin.map(admin => {
        if (admin.adminEmail === loggedInUser.email) {
            user.admin = true;
        }
    })

    console.log(user.admin)


    const onSubmit = data => {
        setShippingData(data);
    };
    const handlePaymentSuccess = paymentId => {
        const reviewData = {
            serviceName: serviceDetail.name,
            servicePrice: serviceDetail.price,
            userName: shippingData.userName,
            email: shippingData.email,
            paymentId
        };
        const url = `https://intense-escarpment-18189.herokuapp.com/addOrder`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Thank you for your order");
                }
            })
    }


    // Show Service name & Price
    useEffect(() => {
        fetch('https://intense-escarpment-18189.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    const result = services.map(ser => {
        if (ser._id === id) {
            serviceDetail.name = ser.name;
            serviceDetail.price = ser.price;
            serviceDetail.image = ser.imageURL;
        }
    })


    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Book Now
               </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <Divider />
                <List>
                    <ListItem >
                        <Link to="/home"><Typography variant="h4">Mobile Repair</Typography></Link>
                    </ListItem>
                    {
                        user.admin == false &&
                        <div>
                            <ListItem button>
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <Link to={`user/${service._id}`}><ListItemText primary="Book" /></Link>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <AddCircleIcon />
                                </ListItemIcon>
                                <Link to="/bookings"><ListItemText primary="Booking List" /></Link>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <EditIcon />
                                </ListItemIcon>
                                <Link to="/review"><ListItemText primary="Review" /></Link>
                            </ListItem>
                        </div>
                    }
                    {
                        user.admin == false &&
                        <div>
                            <ListItem button>
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <Link to="/manage"><ListItemText primary="Manage Service" /></Link>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <AddCircleIcon />
                                </ListItemIcon>
                                <Link to="/authority"><ListItemText primary="Add Service" /></Link>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <EditIcon />
                                </ListItemIcon>
                                <Link to="/totalOrder"><ListItemText primary="Order List"></ListItemText></Link>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <EditIcon />
                                </ListItemIcon>
                                <Link to="/makeAdmin"><ListItemText primary="Make Admin"></ListItemText></Link>
                            </ListItem>
                        </div>
                    }
                </List>
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <div className="row">
                        <div style={{ display: shippingData ? 'none' : 'block' }} className="col-md-6">
                            {/* react - form -hook  */}

                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* register your input into the hook by invoking the "register" function */}
                                <label class="form-label">User Name</label>
                                <input class="form-control" defaultValue={loggedInUser.name} {...register("userName")} name="userName" />
                                <br />
                                <label class="form-label">User Email</label>
                                <input class="form-control" defaultValue={loggedInUser.email} {...register("email")} name="email" />
                                <br />
                                <label class="form-label">Service Name</label>
                                <input class="form-control" defaultValue={serviceDetail.name} {...register("serviceName")} name="serviceName" />
                                <br />
                                <label class="form-label">Price</label>
                                <input class="form-control" defaultValue={serviceDetail.price} {...register("servicePrice")} name="servicePrice" />
                                <br />

                                {errors.exampleRequired && <span>This field is required</span>}
                                <input class="btn btn-success" type="submit" />
                            </form>
                        </div>
                        <div style={{ display: shippingData ? 'block' : 'none' }} className="col-md-6">
                            <h3 className="mb-5 text-info text-decoration-underline">Pay With Card</h3>
                            <StripePayment handlePayment={handlePaymentSuccess} />
                        </div>
                    </div>
                </Container>
            </main>
        </div>
    );
};
export default UserDashboard;