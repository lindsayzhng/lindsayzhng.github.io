

const Window = () => {
    return (
        <div>
            <div class="form windows js-windows windows-form" id="form">
			<header class="js-winheader windows-header">
				<span>Windows 98 Icon Viewer</span>
				<button class="windows-button">
                    <img src="images/close-icon.png"/>
                </button>
				<button class="windows-button" >
                    <img src="images/question-icon.png" />
                </button>
			</header>
			<div class="form-content" >
				<div class="icon-wrap">
					<div class="icon-outer-container">			
						<div class="icon-inner-container" >
						</div>
					</div>
				</div>
			</div>
		</div>
        </div>
    )
}

export default Window;