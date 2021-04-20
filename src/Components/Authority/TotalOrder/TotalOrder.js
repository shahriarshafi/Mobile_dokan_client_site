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
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

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

const TotalOrder = () => {
    const [manageServices, setManageServices] = useState([]);
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [list, setList] = useState([]);
    console.log(list);
    console.log(loggedInUser);

    const [isAdmin, setIsAdmin] = useState([]);
    const [user, setUser] = useState({
        admin: false,
    });

    useEffect(() => {
        fetch('https://intense-escarpment-18189.herokuapp.com/adminEmail')
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    const adminMap = isAdmin.map(admin => {
        if (admin.adminEmail === loggedInUser.email) {
            user.admin = true;
        }
    })

    const [status, setStatus] = useState([]);

    const updateData = (id) => {
        const url = `https://intense-escarpment-18189.herokuapp.com/update/${id}`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => {
                if (res) {
                    console.log(res)
                    alert('Your status has been update successfully');
                }
            })
    }

    const updateStatus = (event) => {
        const data = { ...status }
        data[event.target.name] = event.target.value;
        setStatus(data)
    }


    useEffect(() => {
        fetch('https://intense-escarpment-18189.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setManageServices(data))
    }, [manageServices])
    return (
        <>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            Total Order
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
                                    <Link to="/user"><ListItemText primary="Book" /></Link>
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
                            user.admin == true &&
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
                            <div className="col-md-12">
                                <table class="table">
                                    <thead>
                                        <tr class="bg-info rounded">
                                            <th scope="col"> Name</th>
                                            <th scope="col">Email ID</th>
                                            <th scope="col">Service</th>
                                            <th scope="col">Pay With</th>
                                            <th scope="col">Order Status</th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-warning">
                                        {manageServices.map(service => (<tr>
                                            <th scope="row">{service.userName}</th>
                                            <td>{service.email}</td>
                                            <td>{service.serviceName}</td>
                                            <td>Card</td>
                                            <td><h3>
                                                <select
                                                    value={service.status}
                                                    onChange={updateStatus}
                                                    className="form-control text center btn btn-warning"
                                                    name="status"
                                                >
                                                    <option>Pending</option>
                                                    <option>Shipped</option>
                                                    <option>Done</option>
                                                </select>
                                            </h3>
                                                <button className="btn btn-info" onClick={() => updateData(service._id)}>Update</button></td>
                                        </tr>))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </Container>
                </main>
            </div>
        </>
    );
};

export default TotalOrder;