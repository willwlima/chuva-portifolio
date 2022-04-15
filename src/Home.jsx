import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography, Box } from "@material-ui/core/";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LanguageIcon from "@mui/icons-material/Language";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import "./Home.css";
import AvatarNav from "./components/Avatar/AvatarNav";
import RightSide from "./RightSide";

import BttonForm from "./components/Button/ButtonFormCondicional";
import Footer from "./Footer";
const drawerWidth = 220;
const drawerHeight = 2508;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: " #fff",
    width:"1366px",
    height: "150%"
    
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    background: "#fdf1eb",
    color: "#3e3e3e",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    height: drawerHeight,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Home(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [text, setText] = useState();
  const [maisTopico, setMaisTopico] = useState();

  function expandirTexto(e) {
    e.preventDefault();
    setText(" ");
  }

  function expandirPostTopico(e) {
    setMaisTopico(" ");
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Box className="side-rectange">
        <Typography className="side-rectange-typography">SLACA 2019</Typography>
      </Box>
      <Toolbar className="side-image"></Toolbar>
      <div className={classes.toolbar} />
      <Divider className="divider-linha " />
      <div className="selecionado-btn">
        <div className="selecionado-retangulo"></div>
      </div>
      <List>
        {[
          "Apresentação",
          "Comitês",
          "Autores",
          "Eixos temáticos",
          "Trabalhos",
          "contato",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <div className="selecionado"></div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Toolbar className="side-center">
            <p className="text-one">
              Anais do Simpósio Latino Americano de Ciências de Alimentos
            </p>
            <p className="text-twoo" variant="h6" noWrap component="div">
              Anais do 13º Simpósio Latino Americano de Cieências de Alimentos
            </p>
            <p className="text-tree">ISSN 1234-5678</p>
          </Toolbar>
          <button className="btn-language">
            <LanguageIcon className="language-globo-icon" />
            PT, BR <ArrowDropDownIcon className="arrowDropDownIcon-icon" />
          </button>
          <AvatarNav />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <p paragraph className="info-text">
          Análise sensorial de preparações funcionais desenvolvidas para
          escolares entre 09 e 15 anos, do município de Campinas/SP
        </p>
        <div className="institutional-video">
          <iframe
            height=""
            src="https://www.youtube.com/embed/nVfT22jpJD4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <RightSide />

        <div className="resumo-box">
          <div className="resumo-header">
            <h3>Resumo</h3>
          </div>
          <p className="description ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus
            felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce
            auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl,
            vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut
            viverra lorem vestibulum ut. Phasellus condimentum orci id leo
            condimentum lobortis et non lorem. Sed id nisl metus. Quisque
            sollicitudin ligula in sapien scelerisque, ac gravida eros
            vestibulum Phasellus condimentum orci id leo condimentum lobortis et
            non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien
            scelerisque, ac gravida eros vestibulum. Etiam aliquam dictum nisl,
            vel aliquet enim accumsan sit ametl accumsant...{" "}
            <button className="button-expandir" onClick={expandirTexto}>
              ver mais
            </button>
          </p>
        </div>
        {text && (
          <div className=" box-expandido">
            <p className="texto-expandido">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus
              felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce
              auctor eros sed magna ultricies gravida. Etiam aliquam dictum
              nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi
              tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci
              id leo condimentum lobortis et non lorem. Sed id nisl metus.
              Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros
              vestibulum.
              <br></br>
              <br></br>Fusce vitae luctus dui. Donec id euismod mauris, in
              volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo
              arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla,
              ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas
              dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam
              finibus urna libero, eget interdum eros volutpat ullamcorper.
              Pellentesque et pretium lorem. Aenean interdum quis diam ac
              porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare
              enim. Etiam in laoreet odio.
              <br></br>
              <br></br>Nam eget tristique elit, at fermentum tellus. Mauris
              scelerisque ligula id eleifend feugiat. Donec eleifend vehicula
              sem nec dapibus. Integer scelerisque neque dui, in lacinia erat
              molestie eu. Phasellus maximus dui eget lacus porta tempor. Ut ex
              nibh, dignissim quis purus semper, efficitur facilisis turpis.
              Praesent blandit elementum ultricies. Aliquam sit amet enim sit
              amet nulla pulvinar lobortis consectetur non odio. Phasellus at
              lacus hendrerit, vulputate nisi sit amet, viverra mauris. Etiam eu
              scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis,
              orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu
              libero luctus, consectetur lorem vel, interdum sapien. Aenean in
              porta arcu. Maecenas eu maximus massa.
              <br></br> <br></br>Praesent velit dolor, dignissim sed quam ac,
              efficitur porta justo. Pellentesque porta pharetra felis ut
              hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet
              faucibus quam. Maecenas dapibus luctus dolor at viverra. Duis nec
              fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis
              dictum sem. Aliquam at malesuada arcu. Aliquam erat volutpat.
              Donec varius ipsum purus, ut vehicula purus placerat vitae. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        )}
        <div className="discussoes-box">
          <div className="discussoes-header">
            <h3>Discussões</h3>
          </div>
          <h3 className="discussoes-text-top">
            Compartilhe suas ideias ou dúvidas com os autores!
          </h3>
          <div className="discussoes-icons">
            <img src="image/icone1.png" alt="icone" />
            <img src="image/icone2.png" alt="icone" />
            <img src="image/icone3.png" alt="icone" />
          </div>
          <h3 className="discussoes-box-h3">
            Sabia que o maior estímulo no desenvolvimento científico e cultural
            é a curiosidade? Deixe seus questionamentos ou sugestões para o
            autor!
          </h3>

          <BttonForm />

          <hr className="linha" />

          <div className="topico">
            <h2>Assunto da pergunta aparece aqui</h2>
            <h3>Carlos Henrique Santos</h3>
            <p>
              Comecinho da pergunta aparece aqui resente relato inscreve-se no
              campo da análise da dimensão e impacto de processo formativo
              situado impacto de processo formativo processo...
            </p>

            <MoreVertIcon className="moreVertIcon" />
            <button className="btn-favoritar">
              <FavoriteIcon className="favoriteIcon" />
            </button>
            <p className="card-topico-like-text">1 like</p>
            <p className="card-topico-like-resposta">1 resposta</p>
          </div>

          <div className="topico">
            <h2>Assunto da pergunta aparece aqui</h2>
            <h3>Carlos Henrique Santos</h3>
            <p>
              Comecinho da pergunta aparece aqui resente relato inscreve-se no
              campo da análise da dimensão e impacto de processo formativo
              situado impacto de processo formativo processo...
            </p>

            <MoreVertIcon
              onClick={expandirPostTopico}
              className="moreVertIcon"
            />

            <button className="btn-favoritar">
              <FavoriteIcon className="favoriteIcon" />
            </button>
            <p className="card-topico-like-text">1 like</p>
            <p className="card-topico-like-resposta">1 resposta</p>
          </div>
          {maisTopico && (
            <>
              <div className="card-post">
                <h3 className="card-name-post">Adriano da Silva</h3>
                <p className="autor">Autor</p>
                <DoneAllIcon className="icon-DoneAllIcon" />
                <p className="card-post-desciption">
                  Resposta do autor é aqui. Relato inscreve-se no campo da
                  análise da dimensão e impacto de processo formativo situado
                  impacto de processo formativo processo resente relato
                  inscreve-se no campo da análise da dimensão e impacto de
                  processo formativo situado impacto de processo formativo
                  processo.
                </p>
              </div>

              <div className="card-post-two">
                <h3 className="card-name-post">Carlos Henrique Santos</h3>
                <p className="card-post-desciption">
                  Consegui entender melhor agora! Parece que a variação da
                  análise da dimensão e impacto de processo formativo situado
                  impacto de processo formativo.
                  <br></br>
                  <br></br>
                  Obrigada pela resposta, muito interessante o seu trabalho!{" "}
                </p>
              </div>
              <div className="card-post-three">
                <h3 className="card-name-post">Carmila Ferreira Andrade</h3>
                <p className="autor">Coautor</p>
                <DoneAllIcon className="icon-DoneAllIcon" />
                <p className="card-post-desciption">
                  Também ínteressante lembrar que o relato inscreve-se no campo
                  da análise da dimensão e impacto de processo formativo situado
                  impacto de processo formativo processo resente relato
                  inscreve-se no campo da análise da dimensão e impacto de
                  processo formativo situado impacto de processo formativo
                  processo.
                  <br></br>
                  <br></br>
                  Situado impacto de processo formativo processo resente relato
                  inscreve-se no campo da análise da dimensão e impacto de
                  processo formativo situado impacto de processo formativo
                  processo.
                </p>
              </div>

              <div className="card-post-four">
                <h3 className="card-name-post">Ana Carolina</h3>
                <p className="autor">Coautor</p>
                <DoneAllIcon className="icon-DoneAllIcon" />
                <p className="card-post-desciption">
                  Resposta do autor é aqui. Relato inscreve-se no campo da
                  análise da dimensão e impacto de processo formativo situado
                  impacto de processo formativo processo resente relato
                  inscreve-se no campo da análise da dimensão e impacto de
                  processo formativo situado impacto de processo formativo
                  processo.
                </p>
              </div>
            </>
          )}
          <div>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

Home.propTypes = {
  window: PropTypes.func,
};

export default Home;
