(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(162),l=a(160),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return o.a.createElement(c.a,{location:this.props.location,title:e},o.a.createElement(l.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(o.a.Component);t.default=s;var d="1097489062"},156:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},157:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(156);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},158:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},159:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEb0lEQVQ4y12U6VObVRTGMywtIcv7vtlKW+3ojI6dUazLgIMSR5kpFaFlqVCw0hLWTgZatTqhCnZorU6t2hb9INYyIhDKErKQPWQnC1Bo0S/61zyee5Ni7Yebdzv3d55znnMjCzvuIeZaQNK9hJR3GWm/Hdmgi5YTW1Ev/s7G8M86Wwk8iPmRDbiwHlpBmmJSFJP0OxD3LSPiXsSqax6yqPMe4iuLSHpsSBEsE3By2MNEAAnPEi5/PoSO5nqcHzAhsDSLPxMh+r6CLEEzBE0TMOmzI0ax4ZWFHDBB9DWvjavLBBzYjvngmZtExzEjOo3lMBmPoK3iMGory2GfvouH8SBXysBpErBGwDgJygPnCZgrN0PZMkEHdpJBDJ5uxNXWGmyOncODMTO2rgxipOFNfNhUh79Skd3SM3RN+RxUjQ1Rap0sRnUnSW7Kl1O3GXbTvQ29DdX4faAJqUs92BgdQMzSjam+RrTVVCLhtWMr7OXA7JPAOMlMeh/1z4H7EQ+Vv4Tu+rdwoe4N3OxqRGS0H9fa34PlhBFna6vgt81xg9ZZL1kf/6eQA5d2+3efnI3aZmBpegfXP6rDj6YWzHY3YLznA/zU24Lh40b4pyawHQ/kgEwhc5qAkcdLZm5xIGUOzt6BhdT5Pj0Dt7kNU6ZG+Ok+cqkPo/XViFknsR5jQNd/PXQz4PxjQOphlhzbWHXT/TJGOo9jur8Z9r5m/NLRgPn+k7CaW/D9eRMyIS/SIU+u3LzLMTI24px/cmxIpd+JnbUwZm5fw1etb2O6l6Anm7AwcArXz9Ri8c44NmIhrPldfLgZMEkTEmWDTazcYNMDN4Yypf1MpQeRZSssNDa3ztbBP9yDCVI7VF8F1x8TVO4qDbIDqXz/mCEROhwhBly1W8md3CyyD6wXO8kQfIszuEIOf9l+FGNdJ3CRXP62uwnm1nr4nDZsJyN07Jz8hERXcscuZJ+DLEhKQo45hKn+Ncq2FfcjRO/eP/oumquOwDrcjZuDp3H7QicmL3bhhTIdKitew/iNb0jVMjbpVLEzzdT5aDpk7CfOyiWHHda7+MTci2cPHYRcvhdPGXT44dwpLIyYsXB5CF211VApSlFcXIiSvcV49eUXMdhvwq/j3yFIfzKsj7Igqfv5xlUcqzHi4H4DiosKoFYpoZEEKBUKHH7mEH77rAfD7Q0wSBIkQQ1JVEOlLIWiVI49BGaxr7/yEr4etUD2xccDKNlTiIICGUpLSyColdBSgFqtgE4rQVQLeO7pMugkkWAi9FoNB0iiAC1919GzViNiL4H1eg1kFeXPo6iokILUEAQVVCoFD+QqKfCA3kCJ5BAFAQcM+3YBDCiSUongLI4ttlem16hJjZIr40tQ8g0MzjaU6QzQEEwjithPQC0D0pKkHEQksCAwhgpKaoOMlfZIGQPyrLTYlQXqtVpqgQiFvAT7dHqCaTlQw/op5RIzQWy/QiGHjIMYkOjqPJCro8VV0EatRuLZdRym5e/FfMlCXpmS3Gce/Av2t63315KjNAAAAABJRU5ErkJggg==",width:50,height:50,src:"/static/2d3104926fe18f32edafe5d5f00e4b04/58398/profile-pic.png",srcSet:"/static/2d3104926fe18f32edafe5d5f00e4b04/58398/profile-pic.png 1x,\n/static/2d3104926fe18f32edafe5d5f00e4b04/fd23f/profile-pic.png 1.5x,\n/static/2d3104926fe18f32edafe5d5f00e4b04/fc368/profile-pic.png 2x,\n/static/2d3104926fe18f32edafe5d5f00e4b04/521d9/profile-pic.png 3x"}}},site:{siteMetadata:{title:"Coding Illusions",author:"Alex Landini",social:{twitter:"landal79"}}}}}},160:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(165),s=a.n(l);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,l=n.data.site,d=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Coding Illusions",description:"A starter blog demonstrating what Gatsby can do.",author:"Alex Landini"}}}}},162:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=(a(163),a(159)),l=a(157),s=a(166),d=a(164),u=a.n(d);var p=function(){return o.a.createElement(l.b,{query:m,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.social,r=t.title;return o.a.createElement("div",{className:"d-flex flex-column flex-grow-1 align-items-center justify-content-center"},o.a.createElement("h3",{className:"text-monospace text-center"},o.a.createElement(l.a,{style:{"word-spacing":"100vw"},to:"/"},r)),o.a.createElement(u.a,{className:"img-fluid img-thumbnail rounded-circle mx-auto",fixed:e.avatar.childImageSharp.fixed,alt:a}),o.a.createElement("p",null,"Written by ",o.a.createElement("strong",null,a),"."," ",o.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"You should follow him on Twitter")),o.a.createElement(s.a,{sourceType:"landal79",screenName:"landal79",options:{height:400}}))},data:c})},m="1286200194",f=(a(148),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=(new Date).getFullYear();return o.a.createElement("div",{className:"container-fluid no-gutters h-100"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"pt-3 col-left col-12 col-md-3 flex-grow-1"},o.a.createElement(p,null)),o.a.createElement("div",{className:"offset-md-3 col pt-3"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},e)),o.a.createElement("footer",null,"© ",t,", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))))},t}(o.a.Component));t.a=f}}]);
//# sourceMappingURL=component---src-pages-404-js-8bd8dbc816a30526aeb0.js.map