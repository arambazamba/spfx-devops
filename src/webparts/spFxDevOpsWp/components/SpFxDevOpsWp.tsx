import * as React from 'react';
import styles from './SpFxDevOpsWp.module.scss';
import { ISpFxDevOpsWpProps } from './ISpFxDevOpsWpProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpFxDevOpsWp extends React.Component<ISpFxDevOpsWpProps, {}> {
  public render(): React.ReactElement<ISpFxDevOpsWpProps> {
    return (
      <div className={ styles.spFxDevOpsWp }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint DevOps</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
