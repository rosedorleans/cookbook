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
        category {
          id
          name
        }
      }

      _allPostsMeta {
        count
      }
    }
`