import React from "react";
import Grid from '@material-ui/core/Grid';
import Heart from '../assets/icon-heart.png';
import api from '../services/organigram';
import { NavLink } from 'react-router-dom'

function Product() {
  return (
    <div>
      <div className="Image-app">
        <NavLink to="/">
          <img src="https://etc.usf.edu/clipart/21900/21988/square_21988_md.gif" alt="product"/>
        </NavLink>
      </div>

      <div className="Container">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <p>
              Ilay Cute Bear Comfy Sleepwear Set
            </p>
            <div className="Size">
              <span> L, X, M, S </span>
            </div>
            <div className="Price">
              56.000
            </div>
          </Grid>

          <Grid item xs={4}>
            <div className="float-to-right">
              <img src={Heart} className="App-logo-right" alt="logo" />
              <button> Buy </button>
            </div>
          </Grid>

        </Grid>
      </div>
    </div>
  );
}

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: []
    }

    this.handleScroll = this.handleScroll.bind(this);
  }
  async componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    try {
      const dataApi = await api.getOrganigramList();
      this.setState({itemCount: dataApi.data});
    } catch(err) {
      throw err;
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  async handleScroll(event) {
    try {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      const dataApi = await api.getOrganigramList();
      const pushItem = [...this.state.itemCount];
      pushItem.push(...dataApi.data);
      this.setState({itemCount: pushItem});
    } catch(err) {
      throw err;
    }
  }

  render() {
      return (
        <div className="Index-app">
          <div className="Container">
            <div className="Title">
              Rekomendasi Produk
            </div>

            <div>
              <b className="Sort-product"> Urutkan </b>
              <b className="Sort-product"> Filter </b>
            </div>
          </div>


          <br />

          { this.state.itemCount.map((value, index) => {
            return <Product key={index}/>
          })}

        </div>

      );
  }
};

export default Index;
