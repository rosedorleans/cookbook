export default gql`
  query postBySlug($slug:String) {
    post(filter: { slug: { eq: $slug } }) {
      id
      slug
      title
      date
      content {
        value
      }
      coverImage {
        url
      }
      category {
        id
        name
      }
    }
  }
`;