import Prismic from './Prismic'
import Router from '../Router'
import Error from '../utils/Error'

export default {
  index(req, res){
    Prismic.api(req, res)
      .then((api) => {
        api.getByUID("documentation", "documentation")
          .then((doc) => {
            const scenes = doc.examples.slices.reduce((acc, s) => {
              return s.sliceType === 'example' ? `${acc ? acc + ',' : ''}${s.value.docs[0].animation}` : ''
            }, null)
            const scenario = `[${scenes}]`
            console.log(scenario)

            res.render('index', {'doc': doc, scenario: scenario})
          })
          .catch((err) => res.redirect(Router.notFound))
        })
      .catch((err) => Error.handle(err, req, res))
  },

  page(req, res){
    Prismic.api(req, res)
      .then((api) => {
        api.getByUID("demo", req.params.uid)
          .then((doc) => res.render('page', {'doc': doc}))
          .catch((err) => res.redirect(Router.notFound))
        })
      .catch((err) => Error.handle(err, req, res))
  },

  notFound(req, res){
    res.render('notFound')
  }
}
