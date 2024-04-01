import {formatISO9075} from "date-fns";

export default function Post({title,summary,cover,content,createdAt}) {
    return (
        <div className="post">
        <div className="image">
          <img src="https://i.pinimg.com/564x/66/69/aa/6669aa09bc7baabaf050f80c86416806.jpg"></img>
        </div>
        <div className="texts">
          <h2>{title}</h2>
          <p className="info">
            <a className="author">Queen of Spades</a>
            <time>{formatISO9075(new Date(createAt))}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    );
}