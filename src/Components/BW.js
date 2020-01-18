import React from 'react';
import Grid from '@material-ui/core/Grid';
import ModalImage from "react-modal-image";
import bw1 from '../BW/bw1.jpg';
import bw2 from '../BW/bw2.jpg';
import bw3 from '../BW/bw3.jpg';
import bw4 from '../BW/bw4.jpg';
import bw5 from '../BW/bw5.jpg';
import bw6 from '../BW/bw6.jpg';
import bw7 from '../BW/bw7.jpg';
import bw8 from '../BW/bw8.jpg';
import bw9 from '../BW/bw9.jpg';
import bw10 from '../BW/bw10.jpg';
import bw11 from '../BW/bw11.jpg';
import bw12 from '../BW/bw12.jpg';
import bw13 from '../BW/bw13.jpg';
import bw14 from '../BW/bw14.jpg';
import bw15 from '../BW/bw15.jpg';
 
function BW() {
  return (
    <div className='BW'>
      <Grid container spacing={3}>
        <Grid item sm={4}>
          <ModalImage small={bw1} large={bw1} hideZoom={true} hideDownload={true} />
        </Grid>
        <Grid item sm={4}>
          <ModalImage small={bw2} large={bw2} hideZoom={true} hideDownload={true} />
        </Grid>
        <Grid item sm={4}>
            <ModalImage small={bw15} large={bw15} hideZoom={true} hideDownload={true} />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item sm={4}>
          <ModalImage small={bw4} large={bw4} hideZoom={true} hideDownload={true} />
        </Grid>
        <Grid item sm={4}>
          <ModalImage small={bw5} large={bw5} hideZoom={true} hideDownload={true} />
        </Grid>
        <Grid item sm={4}>
          <ModalImage small={bw6} large={bw6} hideZoom={true} hideDownload={true} />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item sm={4}>
          <ModalImage small={bw7} large={bw7} hideZoom={true} hideDownload={true} />
        </Grid>
        <Grid item sm={4}>
          <ModalImage small={bw8} large={bw8} hideZoom={true} hideDownload={true} />
        </Grid>
        <Grid item sm={4}>
          <ModalImage small={bw9} large={bw9} hideZoom={true} hideDownload={true} />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item sm={4}>
          <ModalImage small={bw10} large={bw10} hideZoom={true} hideDownload={true} />
        </Grid>
        <Grid item sm={4}>
          <ModalImage small={bw11} large={bw11} hideZoom={true} hideDownload={true} />
        </Grid>
        <Grid item sm={4}>
          <ModalImage small={bw12} large={bw12} hideZoom={true} hideDownload={true} />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item sm={4}>
          <ModalImage small={bw13} large={bw13} hideZoom={true} hideDownload={true} />
        </Grid>
        <Grid item sm={4}>
          <ModalImage small={bw14} large={bw14} hideZoom={true} hideDownload={true} />
        </Grid>
        <Grid item sm={4}>
            <ModalImage small={bw3} large={bw3} hideZoom={true} hideDownload={true} />
        </Grid>
      </Grid>
    </div>
      );
    }
    
export default BW;