/**
 * Rescue Me - Dog Block
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { CheckboxControl, ToggleControl } = wp.components;
//const { withState } = wp.compose;

/**
 * Register block
 */
registerBlockType( 'rescue-me/dog-block', {
	title: __( 'Rescue Me - Dog Block' ),
	icon: 'heart',
	category: 'common',
	keywords: [
		__( 'Rescue Me — Dog Block' ),
		__( 'Dog Block' ),
		__( 'Rescue Dog Block' ),
	],
	// meta fields are set in init.php
	attributes: {
		metaDogs: {
			type: 'boolean',
			source: 'meta',
			// as boolean in init.php
			meta: 'rescue_me_meta_good_with_dogs',
		},
		metaCats: {
			type: 'boolean',
			source: 'meta',
			// as string in init.php
			meta: 'rescue_me_meta_good_with_cats',
		},
		checkboxCats: {
			type: 'boolean',
			default: false,
		},
		checkBox: {
			type: 'boolean',
			default: false,
		},
		done: {
			type: 'boolean',
			default: false,
		},
		boxDone: {
			type: 'string',
			source: 'meta',
			meta: 'bcotodo_gb_metabox',
		},
	},

	edit: props => {
		const {
			attributes: {
				metaDogs,
				metaCats,
				checkboxCats,
				checkDogs,
				checkBox,
				done,
				boxDone,
			},
			className,
			setAttributes,
		} = props;

		return (
			<div className={ className }>
				<CheckboxControl
					heading={ __( 'Option A - single checkbox', 'rescue-me' ) }
					label={ __( 'Good with Dogs', 'rescue-me' ) }
					//help={ __( 'Checkbox control help text', 'rescue-me' ) }
					checked={ metaDogs }
					onChange={ metaDogs => {
						setAttributes( { metaDogs } );
					} }
				/>
				<CheckboxControl
					heading={ __(
						'Option B - copy Brezo\'s two fields but with Checkbox',
						'rescue-me'
					) }
					label={ __( 'Good with Cats', 'rescue-me' ) }
					//help={ __( 'Checkbox control help text', 'rescue-me' ) }
					checked={ checkboxCats }
					onChange={ checkboxCats => {
						setAttributes( { checkboxCats } );
						setAttributes( { metaCats: checkboxCats.toString() } );
					} }
				/>

				<ToggleControl
					heading={ __( 'Checkbox D - toggle - ala Brezo', 'rescue-me' ) }
					label={ __( 'Good with Kids (Brezo version)', 'bcotodo' ) }
					checked={ done }
					onChange={ done => {
						//console.log( done );
						setAttributes( { done } );
						setAttributes( { boxDone: done.toString() } );
					} }
				/>

				<CheckboxControl
					heading={ __( 'Checkbox C - plain checkbox no meta', 'rescue-me' ) }
					label={ __( 'plain checkbox', 'rescue-me' ) }
					checked={ checkBox }
					onChange={ checkBox => {
						setAttributes( { checkBox } );
					} }
				/>
			</div>
		);
	},

	save: function( props ) {
		//return (
		// <div>
		// 	<p>— Hello from the frontend.</p>
		// </div>
		return null;
		//);
	},
} );
