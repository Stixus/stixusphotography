import React from 'react';
import Image from 'react-bootstrap/Image';
import img4 from '../Images/img4.jpg';
import img5 from '../Images/img5.jpg';
import bw10 from '../BW/bw10.jpg';
import '../Stylesheets/WelcomePage.css';
import Carousel from 'react-bootstrap/Carousel';
import Grid from '@material-ui/core/Grid';
import InstagramIcon from '@material-ui/icons/Instagram';
import portrait1 from '../Portrait/portrait1.jpg';
import Typography from '@material-ui/core/Typography';

function WelcomePage() {
  return (
    <div className='WelcomePage'>
      <Grid container spacing={3}>
        <Grid item sm={8}>
          <Carousel className='carousel' controls={false}>
            <Carousel.Item>
              <a href="/gallery">
                <Image src={img4} fluid />
                <Carousel.Caption>
                  <Typography paragraph>Nature Images</Typography>
                </Carousel.Caption>
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="/bw">
                <Image src={bw10} fluid />
                <Carousel.Caption>
                  <Typography paragraph>Black and White Images</Typography>
                </Carousel.Caption>
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href='/about'>
                <Image src={img5} fluid />
                <Carousel.Caption>
                  <Typography paragraph>Horsing Around</Typography>
                </Carousel.Caption>
              </a>
            </Carousel.Item>
          </Carousel>
        </Grid>
        <Grid item sm={4}>
          <a href="https://www.instagram.com/stixusphotography/">
            <Image src={portrait1} fluid className="portrait"/>
            <Typography paragraph>Follow @stixusphotography for more content on Instagram</Typography>
            <InstagramIcon style={{ fontSize: 40, color: 'white' }} />
          </a>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item sm={2}>
        </Grid>
        <Grid item sm={8}>
          <br></br>
          <hr className="divider"></hr>
          <Typography variant="h4">Header</Typography>
          <br></br>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
        </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        </Grid>
        <Grid item sm={2}>
        </Grid>
      </Grid>
    </div>
  );
}

export default WelcomePage;