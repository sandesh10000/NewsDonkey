import React, { Component } from 'react'
import NewsItem from "./NewsItem"
import Spinner from "./Spinner"
import PropTypes from 'prop-types'
export class News extends Component {
    static defaultProps={
        country:"in",
        pageSize:5,
        category:"general"
    }
    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=328e76405cc049198d0bc8d8615f0881&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults,loading:false })
    }
    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=328e76405cc049198d0bc8d8615f0881&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({ articles: parsedData.articles })
            this.setState({
                page: this.state.page + 1,
                loading:false
            })
            
        }
    handlePreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=328e76405cc049198d0bc8d8615f0881&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
        this.setState({
            page: this.state.page - 1,
            loading:false
        })
    }
    render() {
        return (<>
            <div className='container my-3  '>
                <h3 className='text-center'>NewsDonkey-Top Headlines</h3>
                {this.state.loading&&<Spinner/>}
                <div className='row '>
                    {!this.state.loading&&this.state.articles.map((element) => {
                        return <div className='col-md-4 col-sm-6 col-xs-12 col-lg-4' key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.replace(/(<([^>]+)>)/ig, '') : " "} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} />
                        </div>
                    })}
                </div>
                <div className='container d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        </>
        )
    }
}

export default News
