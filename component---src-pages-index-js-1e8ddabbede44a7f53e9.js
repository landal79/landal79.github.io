(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(155),l=a(164),s=a(162),d=a(154),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return o.a.createElement(l.a,{location:this.props.location},o.a.createElement(s.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),e.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return o.a.createElement("div",{key:t.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(d.a)(.25)}},o.a.createElement(c.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),o.a.createElement("small",null,t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))}))},t}(o.a.Component);t.default=u;var p="2093216569"},154:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return s});var n=a(167),r=a.n(n),i=a(168),o=a.n(i);delete o.a.googleFonts;var c=new r.a(o.a);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}};var l=c.rhythm,s=c.scale},155:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(157);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},157:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},158:function(e,t,a){"use strict";a(165);var n=a(160),r=a(0),i=a.n(r),o=a(155),c=a(166),l=a.n(c),s=a(154);var d="2598425350";t.a=function(){return i.a.createElement(o.b,{query:d,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.social;return i.a.createElement("div",{style:{display:"flex","flex-direction":"column","align-items":"center"}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(s.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,a),"."," ",i.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"You should follow him on Twitter")))},data:n})}},159:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},160:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEb0lEQVQ4y12U6VObVRTGMywtIcv7vtlKW+3ojI6dUazLgIMSR5kpFaFlqVCw0hLWTgZatTqhCnZorU6t2hb9INYyIhDKErKQPWQnC1Bo0S/61zyee5Ni7Yebdzv3d55znnMjCzvuIeZaQNK9hJR3GWm/Hdmgi5YTW1Ev/s7G8M86Wwk8iPmRDbiwHlpBmmJSFJP0OxD3LSPiXsSqax6yqPMe4iuLSHpsSBEsE3By2MNEAAnPEi5/PoSO5nqcHzAhsDSLPxMh+r6CLEEzBE0TMOmzI0ax4ZWFHDBB9DWvjavLBBzYjvngmZtExzEjOo3lMBmPoK3iMGory2GfvouH8SBXysBpErBGwDgJygPnCZgrN0PZMkEHdpJBDJ5uxNXWGmyOncODMTO2rgxipOFNfNhUh79Skd3SM3RN+RxUjQ1Rap0sRnUnSW7Kl1O3GXbTvQ29DdX4faAJqUs92BgdQMzSjam+RrTVVCLhtWMr7OXA7JPAOMlMeh/1z4H7EQ+Vv4Tu+rdwoe4N3OxqRGS0H9fa34PlhBFna6vgt81xg9ZZL1kf/6eQA5d2+3efnI3aZmBpegfXP6rDj6YWzHY3YLznA/zU24Lh40b4pyawHQ/kgEwhc5qAkcdLZm5xIGUOzt6BhdT5Pj0Dt7kNU6ZG+Ok+cqkPo/XViFknsR5jQNd/PXQz4PxjQOphlhzbWHXT/TJGOo9jur8Z9r5m/NLRgPn+k7CaW/D9eRMyIS/SIU+u3LzLMTI24px/cmxIpd+JnbUwZm5fw1etb2O6l6Anm7AwcArXz9Ri8c44NmIhrPldfLgZMEkTEmWDTazcYNMDN4Yypf1MpQeRZSssNDa3ztbBP9yDCVI7VF8F1x8TVO4qDbIDqXz/mCEROhwhBly1W8md3CyyD6wXO8kQfIszuEIOf9l+FGNdJ3CRXP62uwnm1nr4nDZsJyN07Jz8hERXcscuZJ+DLEhKQo45hKn+Ncq2FfcjRO/eP/oumquOwDrcjZuDp3H7QicmL3bhhTIdKitew/iNb0jVMjbpVLEzzdT5aDpk7CfOyiWHHda7+MTci2cPHYRcvhdPGXT44dwpLIyYsXB5CF211VApSlFcXIiSvcV49eUXMdhvwq/j3yFIfzKsj7Igqfv5xlUcqzHi4H4DiosKoFYpoZEEKBUKHH7mEH77rAfD7Q0wSBIkQQ1JVEOlLIWiVI49BGaxr7/yEr4etUD2xccDKNlTiIICGUpLSyColdBSgFqtgE4rQVQLeO7pMugkkWAi9FoNB0iiAC1919GzViNiL4H1eg1kFeXPo6iokILUEAQVVCoFD+QqKfCA3kCJ5BAFAQcM+3YBDCiSUongLI4ttlem16hJjZIr40tQ8g0MzjaU6QzQEEwjithPQC0D0pKkHEQksCAwhgpKaoOMlfZIGQPyrLTYlQXqtVpqgQiFvAT7dHqCaTlQw/op5RIzQWy/QiGHjIMYkOjqPJCro8VV0EatRuLZdRym5e/FfMlCXpmS3Gce/Av2t63315KjNAAAAABJRU5ErkJggg==",width:50,height:50,src:"/static/2d3104926fe18f32edafe5d5f00e4b04/58398/profile-pic.png",srcSet:"/static/2d3104926fe18f32edafe5d5f00e4b04/58398/profile-pic.png 1x,\n/static/2d3104926fe18f32edafe5d5f00e4b04/fd23f/profile-pic.png 1.5x,\n/static/2d3104926fe18f32edafe5d5f00e4b04/fc368/profile-pic.png 2x,\n/static/2d3104926fe18f32edafe5d5f00e4b04/521d9/profile-pic.png 3x"}}},site:{siteMetadata:{author:"Alex Landini",social:{twitter:"landal79"}}}}}},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Coding Illusions"}}}}},162:function(e,t,a){"use strict";var n=a(163),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(169),s=a.n(l);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,l=n.data.site,d=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Coding Illusions",description:"A starter blog demonstrating what Gatsby can do.",author:"Alex Landini"}}}}},164:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(154),l=(a(34),a(161)),s=a(155),d=a(170),u=a(158);var p=function(){return o.a.createElement(s.b,{query:m,render:function(e){var t=e.site.siteMetadata.title;return o.a.createElement("div",{style:{maxWidth:Object(c.a)(10),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75),backgroundColor:"#606060"}},o.a.createElement("h6",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},o.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},t)),o.a.createElement(u.a,null),o.a.createElement(d.a,{sourceType:"landal79",screenName:"landal79",options:{height:400}}))},data:l})},m="3221830571",f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.children),a=(new Date).getFullYear();return o.a.createElement("div",null,o.a.createElement("div",{style:{display:"flex","flex-direction":"row"}},o.a.createElement(p,null),o.a.createElement("div",null,o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:""+Object(c.a)(.75)}},t),o.a.createElement("footer",null,"© ",a,", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))))},t}(o.a.Component);t.a=f}}]);
//# sourceMappingURL=component---src-pages-index-js-1e8ddabbede44a7f53e9.js.map