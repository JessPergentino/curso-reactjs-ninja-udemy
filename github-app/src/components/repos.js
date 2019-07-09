import React, { PropTypes } from 'react'

const Repos = ({ className, title, repos }) => (
    <div className={className}>
        <h2>{title}</h2>
        <ul >
            {repos.map((repo, index) => (
                <li key={index}>
                    <a href={repo.link}>{repo.name}</a>
                </li>
            ))}
        </ul>
    </div>
)

Repos.defaultProps = {
    className: ''
}

Repos.prototype = {
    className: PropTypes.string,
    title: PropTypes.isRequired,
    repos: PropTypes.array
}

export default Repos 