/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import {
	InnerBlocks,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './index.scss';
import './editor.scss';
import settings from './settings';
import transforms from './transforms';
import edit from './edit';
import deprecated from './deprecated';

registerBlockType('pb/accordion-item', {
	...settings,

	transforms,

	edit,

	save: ({ attributes }) => {
		const {
			className,
			title,
			initiallyOpen,
			clickToClose,
			autoClose,
			titleTag,
			scroll,
			scrollOffset,
			uuid,
		} = attributes;

		var itemClasses = [
			'c-accordion__item',
			'js-accordion-item',
			'no-js',
		];

		var titleClasses = [
			'c-accordion__title',
			'js-accordion-controller',
		];

		var contentStyles = {};

		if (titleTag === 'button') {
			titleClasses.push('c-accordion__title--button');
		}

		if (initiallyOpen) {
			itemClasses.push('is-open');
		}
		else {
			contentStyles.display = 'none';
		}

		const blockProps = useBlockProps.save({
			className: [...itemClasses, className].join(' '),
			'data-initially-open': initiallyOpen,
			'data-click-to-close': clickToClose,
			'data-auto-close': autoClose,
			'data-scroll': scroll,
			'data-scroll-offset': scrollOffset,
		});

		return (
			<div { ...blockProps }>
				<div className="c-accordion__title">
					<RichText.Content
						id={ 'at-' + uuid }
						className={ titleClasses.join(' ') }
						tagName={ titleTag }
						role="button"
						value={ title }
					/>
				</div>
				<div
					id={ 'ac-' + uuid }
					className="c-accordion__content"
				>
					<InnerBlocks.Content />
				</div>
			</div>
		);
	},

	deprecated,
});
