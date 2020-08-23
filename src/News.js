import React from 'react';
import Header from './Header';
import CardDisplay from './CardDisplay' 
import Loading from './Loading'
import './News.css'
class News extends React.Component {
	constructor(props){
		super(props)
		
		this.state = {
			isLoaded: false,
			news: []
		}
	}
	
	componentDidMount() {
		// let d = new Date();
		fetch( `https://cors-anywhere.herokuapp.com/
				http://newsapi.org/v2/top-headlines?
				q=
				&country=in
				&pageSize=32
				&apiKey=${process.env.REACT_APP_API_KEY}`)
			.then( res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						news : result
					});
				},

				(error) => {
					this.setState({
						error
					});
				}
			)
	}

	render(){
		let {isLoaded ,news} = this.state;
		news = [...new Set(news['articles'])];
		console.log(news);
		let key = 0;
	
		// parse(news[1]['content']).replace(/\[.*\]/, "")
		return(<div>
			{!isLoaded ? < Loading/> : 
				<>
					<Header />
					<div id = "cardContainer">
						{news.map( item => (
							<a href = {item.url} target = {"_blank"} key = {key++} id = "a">
								<CardDisplay key = {key++}
									title = {item.title}
									description = {item.description}
									urlToImage = {item.urlToImage}
								/>	
							</a>
							))
						}
					</div>
				</>
			}
				
			</div>
		)
	}
}

export default News