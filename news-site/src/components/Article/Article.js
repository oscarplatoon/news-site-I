

function Article(props) {

  const getByline = () => {
    return props.byline && <h2>{ props.byline }</h2>
  }

  const getImage = () => {
    return props.image && <img src={ props.image } alt={ props.title } />
  }
  
  return (
    <div>
      <h1> 
        { props.title }
      </h1>
      <p>
        { props.created_date }
      </p>
      { getByline() }
      { getImage() }
      <p>
        { props.abstract }
      </p>
    </div>
  )
}

export default Article;

// The `Article` component should:
// 1. Display the `title` inside of an `<h1>` tag.
// 2. Display the `created_date` in a `<p>` tag.
// 3. Display the `byline` (if it exists) in an `<h2>` tag.
// 4. Display the `image` (if it exists) in an `<img>` tag (the value of `image` should be set to the `src` attribute of the `<img>` tag).
// 5. Display the `abstract` inside of a `<p>` tag.