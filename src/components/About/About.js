import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import History from '../History/History';
import Contact from '../Contact/Contact';


export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to='/about' className='subnav_links'>
            <h3>About</h3>
          </Link>
          <Link to='/about/history' className='subnav_links'>
            <h3>History</h3>
          </Link>
          <Link to='/about/contact' className='subnav_links'>
            <h3>Contact</h3>
          </Link>
        </div>

        <div className='box'>
          <Switch>
            <Route path='/about/history' component={History} />
            <Route path='/about/contact' component={Contact} />
            <Route path='/about'
              render={() => (
                <div>
                  <h1>About the University:</h1>
                  <p>
                      Normcore marfa heirloom la croix, kickstarter shoreditch iPhone hashtag salvia copper mug bushwick. VHS subway tile yuccie vinyl flannel cliche plaid fam lyft williamsburg semiotics. Craft beer mixtape pitchfork XOXO venmo intelligentsia iPhone retro typewriter. Pop-up aesthetic cray etsy man braid, thundercats plaid drinking vinegar swag farm-to-table. Small batch activated charcoal venmo, direct trade paleo next level tacos intelligentsia yuccie before they sold out tofu health goth keffiyeh try-hard.
                  </p>
                </div>
              )}/>
          </Switch>
        </div>
      </div>
    );
  }
}