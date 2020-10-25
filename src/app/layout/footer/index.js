import React from 'react';
// Styles
import './styles.scss';

const TECHNOLOGIES = [
  {
    key: 'react',
    title: 'ReactJS',
    imageURL: 'https://coderscantabria.files.wordpress.com/2017/11/react.png',
    link: 'https://reactjs.org'
  },
  {
    key: 'redux',
    title: 'Redux',
    imageURL: 'http://blog.js-republic.com/wp-content/uploads/2016/11/logo-redux.png',
    link: 'https://redux.js.org'
  },
  {
    key: 'webpack',
    title: 'Webpack',
    imageURL: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/225/full/webpack_logo.png',
    link: 'https://webpack.js.org'
  },
  {
    key: 'ES6',
    title: 'ES6',
    imageURL: 'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/049/full/EGH_LearnES6_Final.png',
    link: 'http://es6-features.org'
  },
  {
    key: 'sass',
    title: 'Sass',
    imageURL: 'http://thimblecss.com/images/sass.png',
    link: 'https://sass-lang.com'
  }
];

const onOpenDetails = (e, item) => {
  window.open(item.link);
}

const Footer = () => (
  <footer>
    <div className='footer-content'>
      {
        TECHNOLOGIES.map((item) => {
          return (
            <img
              key={item.key}
              src={item.imageURL}
              alt={item.title}
              title={item.title}
              onClick={(e) => onOpenDetails(e, item)}
            />
          );
        })}
    </div>
  </footer>
)

export default Footer;