import React , {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import axios from 'axios'; 
import TextTruncate from 'react-text-truncate';
import "./App.css";

class List extends Component{
  constructor(props) {
    super(props);

    this.state = {
        posts: [],
        startDate: moment()
    };
    this.getArticles = this.getArticles.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getArticles(value){
    axios.get('https://swill.tech/articles/'+value)
    .then(res => {
      const posts = res.data.items;
      this.setState({ posts });
    });
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
    let dateformatted = date.format("YYYY-MM-DD");
    this.getArticles(dateformatted)

  }

  componentDidMount() {
    this.getArticles("current");
  }

  render(){

    function ListItem(props) {

      return (
          <div className="list-group-item list-group-item-action">
          <label className="labelAuthor">{props.value.author} / {props.value.publisher} / {props.value.readingTime} </label>
          <a href={props.value.url} className="headerContent"><TextTruncate line={3} truncateText="…" text={props.value.title} /></a>
          <TextTruncate line={3} truncateText="…" text={props.value.description} />
          </div>
      );
    }

    function List(props) {
      const posts = props.posts;
      const listItems = posts.map((post) => 
      <ListItem key={post.title}
      value={post} />
      );
      return (

          <div>
          {listItems}
          </div>

      );
    }

    return (
        <div className="datepicker">
        <Header />
        <List posts={this.state.posts} /> 
        <ReactDatePicker
        selected={this.state.startDate}
        onChange={this.handleChange} className="datepickerinput"/>
          <Footer />
        </div>
    );
  }

}

export default List;