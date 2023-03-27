import { css } from '@emotion/react';

const style = css``;

interface TemplateNameProps {}

export const TemplateName = (props: TemplateNameProps): JSX.Element => (
  <>
    <div css={style} data-testid="TemplateName">
      TemplateName atom
    </div>
  </>
);
