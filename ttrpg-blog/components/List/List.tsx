import ListItem from "./ListItem";
import classes from "./List.module.css";

function MeetupList(props: any) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup: any) => (
        <ListItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
