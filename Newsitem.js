import React  from 'react'

const NewsItem = (props)=> {


     let {title, description, ImageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
          <div style={   {display:"flex",
                          justifContent: "flex-end",
                          position:"absolute",
                          right:"10"} }>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning" style={{left: '80%',zIndex:1}}>{source}</span>
          </div>
            <img src={!ImageUrl?"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Puneeth_Rajkumar_james_box_off_0-647x363.jpeg?BhJ7HPXqy_RhvBbzYU1dWStjrmNv82Fh":ImageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown" : author} on {new Date(date).toGMTString()} </small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
           </div>
        </div>
      </div>
    )
  }


export default NewsItem
