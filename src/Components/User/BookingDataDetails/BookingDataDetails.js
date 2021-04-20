import React from 'react';

const BookingDataDetails = ({ listDetails }) => {
    console.log({ listDetails })
    return (
        <tbody class="table-danger">
            <tr>
                <th scope="row">{listDetails?.serviceName}</th>
                <td>{listDetails?.servicePrice}</td>
                <td>{listDetails?.paymentId}</td>
                <td className="fw-bolder text-success">{listDetails?.status}</td>
            </tr>
        </tbody>
    );
};

export default BookingDataDetails;