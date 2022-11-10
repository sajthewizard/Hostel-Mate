import React from 'react';

const PreviousReviews = ({ previousreviews }) => {
    const { CustomerName, URL, reviewData, servicename, email } = previousreviews;
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={URL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{CustomerName}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {reviewData}

            </td>

            <th>
                <button className="btn btn-ghost btn-xs">{servicename}</button>
            </th>
        </tr>
    );
};

export default PreviousReviews;