/**
 * Rescue Me - Dog Block
 */

//  Import CSS.
import "./style.scss";
import "./editor.scss";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { CheckboxControl, ToggleControl } = wp.components;
//const { withState } = wp.compose;

/**
 * Register block
 */
registerBlockType("rescue-me/dog-block", {
	title: __("Rescue Me - Dog Block"),
	icon: "heart",
	category: "common",
	keywords: [
		__("Rescue Me — Dog Block"),
		__("Dog Block"),
		__("Rescue Dog Block")
	],
	// meta fields are set in init.php
	attributes: {
		metaDogs: {
			type: "boolean",
			source: "meta",
			meta: "rescue_me_meta_good_with_dogs"
		},
		metaCats: {
			type: "boolean",
			source: "meta",
			meta: "rescue_me_meta_good_with_cats"
		},
		metaKids: {
			type: "boolean",
			source: "meta",
			meta: "rescue_me_meta_good_with_kids"
		}
	},

	edit: props => {
		const {
			attributes: { metaDogs, metaCats, metaKids },
			className,
			setAttributes
		} = props;

		return (
			<div className={className}>
				<CheckboxControl
					heading={__("Title", "rescue-me")}
					label={__("Good with Dogs", "rescue-me")}
					checked={metaDogs}
					onChange={metaDogs => {
						setAttributes({ metaDogs });
					}}
				/>
				<CheckboxControl
					label={__("Good with Cats", "rescue-me")}
					checked={metaCats}
					onChange={metaCats => {
						setAttributes({ metaCats });
					}}
				/>
				<CheckboxControl
					label={__("Good with Kids", "rescue-me")}
					checked={metaKids}
					onChange={metaKids => {
						setAttributes({ metaKids });
					}}
				/>
			</div>
		);
	},

	save: function(props) {
		//return (
		// <div>
		// 	<p>— Hello from the frontend.</p>
		// </div>
		return null;
		//);
	}
});
