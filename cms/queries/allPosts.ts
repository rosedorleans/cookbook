export default gql`
    {
      allPosts {
        id
        slug
        title
        date
        content {
          value
          links
        }
        coverImage {
          url
        }
      }

      _allPostsMeta {
        count
      }
    }
`