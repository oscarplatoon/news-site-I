import React, { Component } from 'react';
import News from './data/news.json';
import navItems from './data/navItems.json';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNav from './components/AppNav/AppNav.js';
import ArticleTeaser from './components/ArticleTeaser/ArticleTeaser.js'
import Article from './components/Article/Article.js'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

class App extends Component {
  constructor(props) {
    super(props);
    const randomArticleIndex = Math.floor(Math.random() * News.length);
    const randomArticle = News[randomArticleIndex];

    this.state = {
      navItems: navItems,
      article: {
        id: randomArticleIndex,
        title: randomArticle.title,
        abstract: randomArticle.abstract,
        byline: randomArticle.byline,
        image: randomArticle.multimedia.length ? randomArticle.multimedia[0].url : null,
        created_date: randomArticle.created_date
      }
    }
  }

  render() {
    const { article, navItems } = this.state

    return (
      <div className="App">
        <h1>AppNav Component</h1>
        <hr />
        <Navbar bg="dark" variant="dark">
          <Container>
            <AppNav navItems={navItems} handleNavClick={(clickedItem) => { console.log(clickedItem) }} />
          </Container>
        </Navbar>

        <h1>ArticleTeaser Component</h1>
        <hr />

        <ArticleTeaser
          id={article.id}
          title={article.title}
          created_date={article.created_date}
          handleTitleClick={(articleID) => { console.log(articleID) }} />

        <h1>Article Component</h1>
        <hr />

        <Article {...article} />
      </div>
    );
  }
}

export default App;
