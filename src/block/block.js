/**
 * Rescue Me - Dog Block
 */

//  Import CSS.
import "./style.scss";
import "./editor.scss";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { CheckboxControl, RadioControl } = wp.components;
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
		},
		metaGender: {
			type: "string",
			source: "meta",
			meta: "rescue_me_meta_gender"
		},
		metaSize: {
			type: "string",
			source: "meta",
			meta: "rescue_me_meta_size"
		},
		metaAge: {
			type: "string",
			source: "meta",
			meta: "rescue_me_meta_age"
		}
	},

	edit: props => {
		const {
			attributes: {
				metaDogs,
				metaCats,
				metaKids,
				metaGender,
				metaSize,
				metaAge
			},
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
				<RadioControl
					label={__("Gender", "rescue-me")}
					selected={metaGender}
					options={[
						{ label: "Female", value: "Female" },
						{ label: "Male", value: "Male" }
					]}
					onChange={metaGender => setAttributes({ metaGender })}
				/>
				<RadioControl
					label={__("Size", "rescue-me")}
					selected={metaSize}
					options={[
						{ label: "Small", value: "Small" },
						{ label: "Medium", value: "Medium" },
						{ label: "Large", value: "Large" },
						{ label: "Extra Large", value: "Extra Large" }
					]}
					onChange={metaSize => setAttributes({ metaSize })}
				/>
				<RadioControl
					label={__("Age", "rescue-me")}
					selected={metaAge}
					options={[
						{ label: "Puppy", value: "Puppy" },
						{ label: "Young", value: "Young" },
						{ label: "Adult", value: "Adult" },
						{ label: "Senior", value: "Senior" }
					]}
					onChange={metaAge => setAttributes({ metaAge })}
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
