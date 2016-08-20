## Documentation for scrollx

https://github.com/arnaudlewis/scrollx

## configure access point to prismic io repo

To connect the project to the prismic repo, write the following code in a file named <b>prismic-configuration.js</b> in the folder <b>app/conf</b> :

<pre>
<code>
export default {

  apiEndpoint: 'https://scrollx.prismic.io/api'

  // -- Access token if the Master is not open
  accessToken: 'prismic-token',

  // OAuth
  clientId: 'prismic-clientID',
  clientSecret: 'prismic-clientSecret'
}
</code>
</pre>
