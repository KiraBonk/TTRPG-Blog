import Card from "../Card/Card";
import classes from "./ListItem.module.css";
import Image from "next/image";

import { useRouter } from "next/router";
import Link from "next/link";

function ListItem(props: any) {
  // const router = useRouter();

  // function showDetailsHandler() {
  //   router.push('/')
  // }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={props.image} alt={props.title} width="200" height="200" />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button><Link href={`/characters/${props.id}`}>Show Details</Link></button>
        </div>
      </Card>
    </li>
  );
}

export default ListItem;
