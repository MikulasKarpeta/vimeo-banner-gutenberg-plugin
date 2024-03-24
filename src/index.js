const { registerBlockType } = wp.blocks;
import { View } from "@wordpress/primitives";
const {
  MediaPlaceholder,
  InspectorControls,
  MediaUploadCheck,
  useBlockProps,
} = wp.blockEditor;
const {
  PanelBody,
  TextControl,
  ToggleControl,
  Button,
  PanelRow,
  RadioControl,
} = wp.components;

import "./style.scss";

registerBlockType('minimalio-blocks/minimalio-vimeo-banner', {
  title: 'Vimeo Banner - Minimalio',
  description: 'A Full width Vimeo banner',
  icon: 'format-video',
  category: 'media',
  apiVersion: 3,
  attributes: {
    video: {
      type: "string",
      default: "",
    },
    aspect: {
      type: "string",
      default: "16-9",
    },
    autoplay: {
      type: "boolean",
      default: true,
    },
    controls: {
      type: "boolean",
      default: true,
    },
    controlsColor: {
      type: "string",
      default: "#fff",
    },
    width: {
      type: "string",
      default: "container",
    },
    height: {
      type: "string",
      default: "full",
    },
    mobile: {
      type: "boolean",
      default: false,
    },
    heightMobile: {
      type: "string",
      default: "80",
    },
    heightTablet: {
      type: "string",
      default: "80",
    },
    heightDesktop: {
      type: "string",
      default: "80",
    },
    images: {
      type: "object",
      selector: "js-book-details-image",
      default: {},
    },
  },

  // custom functions

  edit({ attributes, setAttributes }) {
    const hasImages = attributes.images.id !== undefined;

    const blockProps = useBlockProps({
      className: "minimalio",
    });

    return (
      <>
        <InspectorControls style={{ marginBottom: "0px" }}>
          <PanelBody title={"Vimeo banner options:"}>
            <PanelRow>
              <TextControl
                label="vimeo ID (number only)"
                labelPosition="top"
                value={attributes.video}
                type="text"
                onChange={(newVideo) => setAttributes({ video: newVideo })}
              />
            </PanelRow>
            <PanelRow>
              <RadioControl
                label="Video Aspect ratio"
                selected={attributes.aspect}
                options={[
                  { label: "16/9", value: "16-9" },
                  { label: "4/3", value: "4-3" },
                  { label: "2.39/1", value: "239-1" },
                ]}
                onChange={(value) => setAttributes({ aspect: value })}
              />
            </PanelRow>

            <MediaUploadCheck>
              <MediaPlaceholder
                allowedTypes={["image"]}
                labels={{
                  title: "Background image",
                }}
                multiple={false}
                value={attributes.images ? attributes.images.id : ""}
                onSelect={(newImages) => setAttributes({ images: newImages })}
              />
            </MediaUploadCheck>
          </PanelBody>
          <PanelBody>
            <ToggleControl
              checked={attributes.mobile}
              label={"Hide video on mobile"}
              help="Background image will be shown instead"
              style={{ marginTop: "0px" }}
              onChange={() =>
                setAttributes({
                  mobile: !attributes.mobile,
                })
              }
            />
            <ToggleControl
              checked={attributes.controls}
              label={"Enable controls"}
              onChange={() =>
                setAttributes({
                  controls: !attributes.controls,
                })
              }
            />
            {attributes.controls && (
              <TextControl
              label={"Controls color"}
              labelPosition="top"
              value={attributes.controlsColor}
              type="text"
              onChange={(value) => setAttributes({ controlsColor: value })}
            />

            )}

          </PanelBody>
          <PanelBody title={"Size:"}>
            <PanelRow>
              <RadioControl
                label="Container width"
                help="Choose 'Full width' to overwrite theme settings"
                selected={attributes.width}
                options={[
                  { label: "Current theme container", value: "container" },
                  { label: "Full width", value: "full" },
                ]}
                onChange={(value) => setAttributes({ width: value })}
              />
            </PanelRow>
            <PanelRow>
              <RadioControl
                label="Container height"
                help="Choose container height"
                selected={attributes.height}
                options={[
                  { label: "Full height", value: "full" },
                  { label: "Custom height", value: "custom" },
                ]}
                onChange={(value) => setAttributes({ height: value })}
              />
            </PanelRow>

            {attributes.height === "custom" && (
              <PanelRow>
                <TextControl
                  label="Height on mobile (vh)"
                  labelPosition="top"
                  value={attributes.heightMobile}
                  type="string"
                  onChange={(newHeightMobile) =>
                    setAttributes({ heightMobile: newHeightMobile })
                  }
                />
              </PanelRow>
            )}

            {attributes.height === "custom" && (
              <PanelRow>
                <TextControl
                  label="Height on tablet (vh)"
                  labelPosition="top"
                  value={attributes.heightTablet}
                  type="string"
                  onChange={(newHeightTablet) =>
                    setAttributes({ heightTablet: newHeightTablet })
                  }
                />
              </PanelRow>
            )}

            {attributes.height === "custom" && (
              <PanelRow>
                <TextControl
                  label="Height on desktop (vh)"
                  labelPosition="top"
                  value={attributes.heightDesktop}
                  type="string"
                  onChange={(newHeightDesktop) =>
                    setAttributes({ heightDesktop: newHeightDesktop })
                  }
                />
              </PanelRow>
            )}
          </PanelBody>
        </InspectorControls>

        <View {...blockProps}>
          <div
            className="minimalio-video-banner"
            style={{
              background: "#232323",
              color: "white",
              height: "auto",
              padding: "20px",
            }}
          >
            <h2>VIMEO banner from Minimalio</h2>{" "}
            <p>Edit the block from the right sidebar</p>
            {hasImages && (
              <div className="image">
                <figure>
                  <p>Background Image:</p>
                  <img style={{ height: "50px" }} src={attributes.images.url} />
                </figure>
                <div>
                  <Button
                    onClick={() => setAttributes({ images: "" })}
                    className="button"
                    style={{
                      color: "white",
                      background: "#727272",
                      lineHeight: "15px",
                      borderColor: "white",
                      boxShadow: "none",
                    }}
                  >
                    Remove Background Image
                  </Button>
                </div>
              </div>
            )}
          </div>
        </View>
      </>
    );
  },

  save({ attributes }) {
    let variableClass = "minimalio-vimeo-banner " + attributes.width;

    return (
      <div {...useBlockProps}>
        <div
          class={variableClass}
          data-ratio={attributes.aspect}
          data-controls={attributes.controls}
          data-height={attributes.height}
          data-heightmobile={attributes.heightMobile}
          data-heighttablet={attributes.heightTablet}
          data-heightdesktop={attributes.heightDesktop}
          data-mobile={attributes.mobile}
        >
          <div class="minimalio-vimeo-banner__frame">
          {attributes.images.url && (
            <div class="mobile-image">
              <figure className="mobile-image__image">
                <img src={attributes.images.url} />
              </figure>
            </div>
            )}
            <div
              class="vimeo-banner"
              data-vimeo-mute-button="true"
              data-vimeo-play-button="true"
              data-vimeo-resolution="16:9"
              data-vimeo={attributes.video}
            ></div>
            <div
              class="vimeo-background-controls true"
              data-color={attributes.controlsColor}
              style="position: absolute;
              z-index: 2;"
            ></div>
          </div>
        </div>
      </div>
    );
  },
});
