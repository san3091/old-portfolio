import * as React from "react"
import injectSheet from "react-jss"

const GridExperiments = ({ classes })=> (
  <div className={classes.gridWrapper}>
    <div className={classes.magenta} />
    <h1 className={classes.header}>Santiago Quintana</h1>
    <p className={classes.text}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices, eros at pellentesque egestas, velit arcu tristique turpis, quis efficitur justo libero dapibus est. Etiam porttitor, enim a varius placerat, nibh nisl elementum lacus, eget porttitor elit lacus quis purus. Integer sed ipsum est. In quis ex vitae neque venenatis elementum in non metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce vitae pharetra dui, sit amet tincidunt ipsum. Cras id nunc urna. Pellentesque iaculis magna sem, quis tincidunt orci dictum vitae. Proin tempus sem id molestie vehicula. Sed mattis, dui ut pretium vestibulum, neque ipsum pharetra sem, a luctus neque arcu et mauris. Donec ultrices lorem eu ornare scelerisque. Phasellus placerat, nisl et sodales ornare, elit odio rutrum massa, ut cursus nunc libero et ipsum. Phasellus quis felis id sapien aliquet tincidunt. Nullam maximus consequat urna, a auctor ante rutrum eu. Quisque non leo mollis, dapibus dolor vitae, accumsan nisl.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices, eros at pellentesque egestas, velit arcu tristique turpis, quis efficitur justo libero dapibus est. Etiam porttitor, enim a varius placerat, nibh nisl elementum lacus, eget porttitor elit lacus quis purus. Integer sed ipsum est. In quis ex vitae neque venenatis elementum in non metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce vitae pharetra dui, sit amet tincidunt ipsum. Cras id nunc urna. Pellentesque iaculis magna sem, quis tincidunt orci dictum vitae. Proin tempus sem id molestie vehicula. Sed mattis, dui ut pretium vestibulum, neque ipsum pharetra sem, a luctus neque arcu et mauris. Donec ultrices lorem eu ornare scelerisque. Phasellus placerat, nisl et sodales ornare, elit odio rutrum massa, ut cursus nunc libero et ipsum. Phasellus quis felis id sapien aliquet tincidunt. Nullam maximus consequat urna, a auctor ante rutrum eu. Quisque non leo mollis, dapibus dolor vitae, accumsan nisl.
    </p>
    <nav className={classes.navigation}>
    <ul>
      <li>thing 1</li>
      <li>thing 2</li>
      <li>thing 3</li>
    </ul>
    </nav>
  </div>
)

const styles = {
  gridWrapper: {
    display: "grid",
    width: "90%",
    margin: "30px auto",
    gridTemplate: "1fr 1fr 2fr 1fr / 1fr 1fr 1fr 2fr",
    // transform: "rotate(45deg)"
  },

  header: {
    textTransform: "uppercase",
    fontSize: "100px",
    gridColumn: "1 / 3",
    gridRow: "1 / 3"
  },

  magenta: {
    backgroundColor: "rgb(255, 0, 255, 0.5)",
    height: "100%",
    width: "100%",
    gridColumn: "2 / 4",
    gridRow: "1 / 3",
    boxShadow: "20px 20px rgb(0, 255, 255, 0.5)"
  },

  text: {
    gridColumn: "3 / 5",
    gridRow: "2 / 5"
  },

  navigation: {
    fontSize: "40px",
    gridColumn: "1 / 2",
    gridRow: "3 / 4"
  }
}

export default injectSheet(styles)(GridExperiments)
