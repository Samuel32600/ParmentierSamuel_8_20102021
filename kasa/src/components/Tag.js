import React from 'react'
import '../styles/tag.css'


class Tag extends React.Component {
    render() {
        return (
            <div className='container-tag'>
                {this.props.tagListing.map((oneTag) =>
                    <div key={oneTag} className='text-tag'>
                        {oneTag}
                    </div>
                )}
            </div>
        )
    }
}
export default Tag