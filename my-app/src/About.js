import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap';
import { Jumbotron } from 'reactstrap';
export class About extends Component {
    render() {
        return <div className="container">

        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <h3>Who I Am</h3>
            <p>I'm a Student at the University of Washingiton. Studying informatics at the Infromation school. I'm really proud to be part of the amazing Info family here at UW. Becuse in informatics. You learn everything you grow personally internal and professinally.</p>
            <p>Let me share a little about my background. I was born and raised in Eritrea that is located in Horn of Africa. I moved here about 5 years ago. I have been in few countries in Africa so I love learning new language and culture as a result I speak four languages. I also like cats and puppies  I really enjoy going to hiking and natural watery places. </p>
            <Jumbotron>
              <p> I enjoy Natural places</p>
            <img className="image" src="https://cdn.pixabay.com/photo/2016/02/19/10/35/nature-1209302__480.jpg" alt ="natual place"/>

            <p> Traditional coffee maker for Eritrean-Ethiopian culture</p>
            <img className="image" src="https://cdn.pixabay.com/photo/2017/10/27/22/43/coffee-2895730__480.jpg" alt="common food in Eritrea"/>
            </Jumbotron>
          
          </Col>
          
        </Grid>
        <p> 
     
        </p>
        </div>
    }
}