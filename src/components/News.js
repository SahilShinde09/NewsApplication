import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps={
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    static PropTypes={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eed07e9640084c9e8f2de8dbd10d1bc5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, 
            TotalResults: parsedData.TotalResults, 
            loading: false})
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eed07e9640084c9e8f2de8dbd10d1bc5&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, 
            TotalResults: parsedData.TotalResults, 
            loading: false})
    }

    handlePrevClick = async()=>{
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eed07e9640084c9e8f2de8dbd10d1bc5&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);

        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })
        this.setState({page: this.state.page - 1});
        this.updateNews();
    }

    handleNextClick = async()=>{

        // if(!(this.state.page + 1 > Math.ceil(this.state.TotalResults/this.props.pageSize))){

        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eed07e9640084c9e8f2de8dbd10d1bc5&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // this.setState({
        //     page: this.state.page + 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })
    // }
        this.setState({page: this.state.page + 1});
        this.updateNews();

    
}

  render() {
    // let {title, description, urlToImage} = this.props;
    return (
        <div className="container my-3">
          <h1 className="text-center"style={{margin: '30px 0px'}}>News - Top Headlines</h1>
          {this.state.loading && <Spinner/>}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}

          </div>
          <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.TotalResults/this.props.pageSize)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
    );
  }
}

export default News;
