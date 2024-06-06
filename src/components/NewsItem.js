import React, { Component } from 'react'
import News from './News'


export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/realme-12-pro-30060295-16x9.png?VersionId=ubb0BGlcQrc4M36ZesFX.uzISKLFfub6":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}<span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '80%', zIndex: '1'}} >{source}</span></h5>
            <p className="card-text">{description}</p>
            <p className='car-text'><small className='text-muted'>By {!author? "unknown": author} on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer' href={newsUrl} target='blank' className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
