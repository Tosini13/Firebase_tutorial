import React from 'react'

export default function ProjectDetails(props) {
    let id = props.match.params.id;
    return (
        <div className='container section project-details'>
            <div className="card z-depth-0">
                <div className="card-content">
                    {id}
                    <span className="card-title">Project Title</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur distinctio recusandae alias voluptate, perspiciatis a iure asperiores vel quibusdam facilis ullam sapiente rerum voluptatem blanditiis nam repudiandae voluptatum. Labore, autem.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by The Net Ninja</div>
                    <div>2nd Semptember, 2am</div>
                </div>
            </div>
        </div>
    )
}