import React, {JSX, useState} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import Button from 'shared/ui/Button';
import {Themes, useTheme} from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/menu-dark.svg';
import LightIcon from 'shared/assets/icons/menu-light.svg';
import ThemeButton from 'shared/ui/Button/consts/ThemeButton';
import ThemeSwitcher from 'widgets/ThemeSwitcher';
import LangSwitcher from 'widgets/LangSwitcher';

interface ISidebarProps {
    className?: string
}

const Sidebar: React.FC<ISidebarProps> = ({className}: ISidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const {theme} = useTheme();

  function onToggle(): void {
    setCollapsed((prevState) => !prevState);
  }
  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <Button theme={ThemeButton.CLEAR} onClick={onToggle}>{
                theme == Themes.DARK ? <DarkIcon/> : <LightIcon/>
      }</Button>
      <div className={cls.switchers}>
        <LangSwitcher className={cls.lang}/>
        <ThemeSwitcher/>
      </div>
    </div>
  );
};

export default Sidebar;
