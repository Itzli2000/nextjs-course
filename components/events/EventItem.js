import React from "react";
import Link from "next/link";
import classes from './EventItem.module.css';

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
            <time>{formattedDate}</time>
          </div>
        </div>
        <div className={classes.address}>
          <address>{formattedLocation}</address>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}>Explore event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
