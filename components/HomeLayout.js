import Head from 'next/head'
import Link from 'next/link'
import NProgress from'nprogress';
import Router from'next/router';

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

class HomeLayout extends React.Component{
	render(){
		return (
			<div>
				<Head>
					<title>{ this.props.title }</title>
        			<meta name="viewport" content="width=device-width"/>
				</Head>
				<header><Link href='/'><a className="nav-title">{ this.props.title }</a></Link></header>
				<div>{this.props.children}</div>

				<style jsx>
				{`
					header{
						color: #fff;
						background-color: #404040;
						padding: 15px;
						text-align: center;
						font-size: calc(20px + 1vw);
					}
					.nav-title{
						color: #fff;
						text-decoration: none;
					}
				`}
				</style>
				<style jsx global>{`
					*{
						box-sizing: border-box;
						margin: 0;
						padding: 0;
					}		
					h2 {
			          	padding: 5px;
			          	font-size: cal(20px + 1vw);
			          	font-weight: 600;
			          	margin: 0;
			          	color: #fff;
			          	text-align: center;
			        }
					body{
						margin: 0;
						background-color: #666666;
					}
				`}</style>
				<style jsx global>{`
					/* Make clicks pass-through */
					#nprogress {
					  pointer-events: none;
					}

					#nprogress .bar {
					  background: #29d;

					  position: fixed;
					  z-index: 1031;
					  top: 0;
					  left: 0;

					  width: 100%;
					  height: 2px;
					}

					/* Fancy blur effect */
					#nprogress .peg {
					  display: block;
					  position: absolute;
					  right: 0px;
					  width: 100px;
					  height: 100%;
					  box-shadow: 0 0 10px #29d, 0 0 5px #29d;
					  opacity: 1.0;

					  -webkit-transform: rotate(3deg) translate(0px, -4px);
					      -ms-transform: rotate(3deg) translate(0px, -4px);
					          transform: rotate(3deg) translate(0px, -4px);
					}

					/* Remove these to get rid of the spinner */
					#nprogress .spinner {
					  display: block;
					  position: fixed;
					  z-index: 1031;
					  top: 15px;
					  right: 15px;
					}

					#nprogress .spinner-icon {
					  width: 18px;
					  height: 18px;
					  box-sizing: border-box;

					  border: solid 2px transparent;
					  border-top-color: #29d;
					  border-left-color: #29d;
					  border-radius: 50%;

					  -webkit-animation: nprogress-spinner 400ms linear infinite;
					          animation: nprogress-spinner 400ms linear infinite;
					}

					.nprogress-custom-parent {
					  overflow: hidden;
					  position: relative;
					}

					.nprogress-custom-parent #nprogress .spinner,
					.nprogress-custom-parent #nprogress .bar {
					  position: absolute;
					}

					@-webkit-keyframes nprogress-spinner {
					  0%   { -webkit-transform: rotate(0deg); }
					  100% { -webkit-transform: rotate(360deg); }
					}
					@keyframes nprogress-spinner {
					  0%   { transform: rotate(0deg); }
					  100% { transform: rotate(360deg); }
					}
					`}
				</style>

			</div>
		)
	}
}
export default HomeLayout

//url para css de loader https://raw.githubusercontent.com/zeit/next.js/canary/examples/with-loading/static/nprogress.css
/*
copiar esto al codigo
import NProgress from'nprogress';
import Router from'next/router';

Router.onRouteChangeStart = (url) => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()
*/