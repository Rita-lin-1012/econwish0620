import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import Stamp from "../Stamp4"
import PostalStamp from "../PostalStamp"
import "./index.css"
import ntpu_stone from "./ntpu-stone.svg"
import "./wish.css"


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardNew({user}) {
  const [expanded, setExpanded] = React.useState(false);
  const { name, grade, imgSrc, wish } = user

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  
  return (
    <Card sx={{ maxWidth: 345 }}>

      <CardContent>
        <Stack spacing={2}>
        <Sender name={name} grade={grade}/>
        <Box className="box-contained">
          <StampHolder imgSrc={imgSrc}/>
        </Box>
            
        <Wish wish={wish}/>
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>畢業快樂！！！</Typography>
          <Typography paragraph>
            祝福畢業生 前程似錦，鵬程萬里
          </Typography>
          <Typography paragraph>
            點我看更多
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}



function Sender({name, grade}){
    return(
     <div className="sender">
    <div className="label text-shadow">Sender:</div>
    <div className="sender-info">
      <div className="sender-name">
        <div className="sender-name-text text-shadow">{'{'}name{'}'}</div>
      </div>
      <div className="sender-grade">
        <div className="sender-grade-text text-shadow">{'{'}grade{'}'}</div>
      </div>
    </div>
  </div>
  
    )
  }
  function StampHolder({imgSrc}){
    return(
      <div className="stamp-holder">
            <Stamp imgSrc={imgSrc} />
            <PostalStamp/>
            {/* <div className="seal">
  
              <div className="seal-icon"><img class="seal-color" src={ntpu_stone} /></div>
            </div> */}
          </div>
    )
  }
  function Wish({wish}){
    return(
      <div className="wish">
            <div className="right-quotation">”</div>
            <div className="left-quotation">“</div>
            <div className="wish-text">{wish}</div>
          </div>
    )
  }