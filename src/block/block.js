/**
 * Rescue Me - Dog Block
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { CheckboxControl, RadioControl, TextControl } = wp.components;
//const { withState } = wp.compose;

/**
 * Register block
 */
registerBlockType('rescue-me/dog-block', {
	title: __('Rescue Me - Dog Block'),
	icon: 'heart',
	category: 'common',
	keywords: [__('Rescue Me — Dog Block'), __('Dog Block'), __('Rescue Dog Block')],
	// meta fields are set in init.php
	attributes: {
		metaDogs: {
			type: 'boolean',
			source: 'meta',
			meta: 'rescue_me_meta_good_with_dogs'
		},
		metaCats: {
			type: 'boolean',
			source: 'meta',
			meta: 'rescue_me_meta_good_with_cats'
		},
		metaKids: {
			type: 'boolean',
			source: 'meta',
			meta: 'rescue_me_meta_good_with_kids'
		},
		metaGender: {
			type: 'string',
			source: 'meta',
			meta: 'rescue_me_meta_gender'
		},
		metaSize: {
			type: 'string',
			source: 'meta',
			meta: 'rescue_me_meta_size'
		},
		metaAge: {
			type: 'string',
			source: 'meta',
			meta: 'rescue_me_meta_age'
		},
		contactName: {
			type: 'string',
			source: 'html',
			selector: '.rm-contact-name'
		},
		contactEmail: {
			type: 'string',
			source: 'html',
			selector: '.rm-contact-email'
		},
		contactPhone: {
			type: 'string',
			attribute: 'html',
			selector: '.rm-contact-phone'
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
				metaAge,
				contactName,
				contactEmail,
				contactPhone
			},
			className,
			setAttributes
		} = props;

		return (
			<div className={className}>
				<h4>Dog's characteristics</h4>
				<CheckboxControl
					heading={__('Good with', 'rescue-me')}
					label={__('Good with Dogs', 'rescue-me')}
					checked={metaDogs}
					onChange={metaDogs => {
						setAttributes({ metaDogs });
					}}
				/>
				<CheckboxControl
					label={__('Good with Cats', 'rescue-me')}
					checked={metaCats}
					onChange={metaCats => {
						setAttributes({ metaCats });
					}}
				/>
				<CheckboxControl
					label={__('Good with Kids', 'rescue-me')}
					checked={metaKids}
					onChange={metaKids => {
						setAttributes({ metaKids });
					}}
				/>
				<RadioControl
					label={__('Gender', 'rescue-me')}
					selected={metaGender}
					options={[{ label: 'Female', value: 'Female' }, { label: 'Male', value: 'Male' }]}
					onChange={metaGender => setAttributes({ metaGender })}
				/>
				<RadioControl
					label={__('Size', 'rescue-me')}
					selected={metaSize}
					options={[
						{ label: 'Small', value: 'Small' },
						{ label: 'Medium', value: 'Medium' },
						{ label: 'Large', value: 'Large' },
						{ label: 'Extra Large', value: 'Extra Large' }
					]}
					onChange={metaSize => setAttributes({ metaSize })}
				/>
				<RadioControl
					label={__('Age', 'rescue-me')}
					selected={metaAge}
					options={[
						{ label: 'Puppy', value: 'Puppy' },
						{ label: 'Young', value: 'Young' },
						{ label: 'Adult', value: 'Adult' },
						{ label: 'Senior', value: 'Senior' }
					]}
					onChange={metaAge => setAttributes({ metaAge })}
				/>
				<h4>Dog's contact info</h4>
				<TextControl
					className="rm-contact-name"
					label={__('Contact name', 'rescue-me')}
					value={contactName}
					onChange={contactName => setAttributes({ contactName })}
				/>
				<TextControl
					className="rm-contact-email"
					label={__('Contact email', 'rescue-me')}
					value={contactEmail}
					onChange={contactEmail => setAttributes({ contactEmail })}
				/>
				<TextControl
					className="rm-contact-phone"
					label={__('Contact phone', 'rescue-me')}
					value={contactPhone}
					onChange={contactPhone => setAttributes({ contactPhone })}
				/>
			</div>
		);
	},
	// save: function(props) {
	// 	return null;
	// }
	save: props => {
		const {
			attributes: { contactName, contactEmail, contactPhone }
		} = props;
		return (
			<div className="rm-contact">
				<p className="rm-contact-name">{contactName}</p>

				<p>
					<a className="rm-contact-email" href={'mailto:' + contactEmail}>
						{contactEmail}
					</a>
				</p>

				<p>
					<a className="rm-contact-phone" href={'tel:' + contactPhone}>
						{contactPhone}
					</a>
				</p>
			</div>
		);
	}
});
