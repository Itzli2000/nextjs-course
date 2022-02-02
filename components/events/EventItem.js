import Button from "../UI/Button";
import classes from "./EventItem.module.css";
import DateIcon from "../Icons/DateIcon";
import AddressIcon from "../Icons/AddressIcon";
import ArrowRightIcon from "../Icons/ArrowRightIcon";

const EventItem = (props) => {
  const { image, title, date, location, id } = props.event;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedLocation = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{formattedDate}</time>
          </div>
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <address>{formattedLocation}</address>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
