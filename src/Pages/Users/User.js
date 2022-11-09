import React from 'react';

const User = () => {
    return (
        <div className="stats stats-vertical lg:stats-horizontal shadow lg:ml-72">

            <div className="stat">
                <div className="stat-title">Visits</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
                <div className="stat-title">New Users</div>
                <div className="stat-value">4,200</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
                <div className="stat-title">New Registers</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
            <div className="stat">
                <div className="stat-title">Stock price</div>
                <div className="stat-value">$16.36</div>
                <div className="stat-desc">↘︎ .90 (8.6%)</div>
            </div>

        </div>
    );
};

export default User;