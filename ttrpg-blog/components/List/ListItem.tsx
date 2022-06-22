import Card from "../Card/Card";
import classes from "./ListItem.module.css";
import Image from "next/image";

function ListItem(props: any) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={props.image} alt={props.title} width='200' height='200' />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default ListItem;
