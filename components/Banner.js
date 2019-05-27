class Banner extends React.Component{
	render(){
		return (
			<div>
				<div className="banner" />
				<style jsx>{`
					.banner{
						background-image: url(${this.props.backgroundImage});
						background-position: top;
    					background-repeat: no-repeat;
    					background-size: cover;
						height: 300px;
					}
				`}</style>
			</div>
		)
	}
}
export default Banner