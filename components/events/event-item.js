import Image from "next/image";

import Button from "../ui/button";
import classes from "./event-item.module.css";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
    <Image src={"/" + image} alt={title} width={250} height={160} />
      <div className={classes.content}>
        <div classname={classes.summary}>
          <h2>{title}</h2>
        </div>
        <div classname={classes.date}>
          <span className={classes.icon}><DateIcon /></span>
          <time>{humanReadableDate}</time>
        </div>
        <div classname={classes.address}>
          <span className={classes.icon}><AddressIcon /></span>
          <address>{formattedAddress}</address>
        </div>
        <div classname={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />{" "}
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
