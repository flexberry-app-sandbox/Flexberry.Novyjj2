﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Novyjj_2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Регистр оборот.
    /// </summary>
    // *** Start programmer edit section *** (РегистрОборот CustomAttributes)

    // *** End programmer edit section *** (РегистрОборот CustomAttributes)
    [AutoAltered()]
    [Caption("Регистр оборотов")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РегистрОборотE", new string[] {
            "ПриходДенег as \'Приход денег\'",
            "ПриходДенег.ID as \'ID прихода\'",
            "ПриходДенег.Дата as \'Дата\'",
            "ПриходДенег.Сумма as \'Сумма\'",
            "РасходДенег as \'Расход денег\'",
            "РасходДенег.ID as \'ID расхода\'",
            "РасходДенег.Дата as \'Дата\'",
            "РасходДенег.Сумма as \'Сумма\'"}, Hidden=new string[] {
            "ПриходДенег.ID",
            "РасходДенег.ID"})]
    [MasterViewDefineAttribute("РегистрОборотE", "ПриходДенег", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ID")]
    [MasterViewDefineAttribute("РегистрОборотE", "РасходДенег", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ID")]
    [View("РегистрОборотL", new string[] {
            "ПриходДенег.ID as \'ID прихода\'",
            "ПриходДенег.Дата as \'Дата\'",
            "ПриходДенег.Сумма as \'Сумма\'",
            "РасходДенег.ID as \'ID расхода\'",
            "РасходДенег.Дата as \'Дата\'",
            "РасходДенег.Сумма as \'Сумма\'"})]
    public class РегистрОборот : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Novyjj_2.ПриходДенег fПриходДенег;
        
        private IIS.Novyjj_2.РасходДенег fРасходДенег;
        
        // *** Start programmer edit section *** (РегистрОборот CustomMembers)

        // *** End programmer edit section *** (РегистрОборот CustomMembers)

        
        /// <summary>
        /// Регистр оборот.
        /// </summary>
        // *** Start programmer edit section *** (РегистрОборот.ПриходДенег CustomAttributes)

        // *** End programmer edit section *** (РегистрОборот.ПриходДенег CustomAttributes)
        [PropertyStorage(new string[] {
                "ПриходДенег"})]
        [NotNull()]
        public virtual IIS.Novyjj_2.ПриходДенег ПриходДенег
        {
            get
            {
                // *** Start programmer edit section *** (РегистрОборот.ПриходДенег Get start)

                // *** End programmer edit section *** (РегистрОборот.ПриходДенег Get start)
                IIS.Novyjj_2.ПриходДенег result = this.fПриходДенег;
                // *** Start programmer edit section *** (РегистрОборот.ПриходДенег Get end)

                // *** End programmer edit section *** (РегистрОборот.ПриходДенег Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистрОборот.ПриходДенег Set start)

                // *** End programmer edit section *** (РегистрОборот.ПриходДенег Set start)
                this.fПриходДенег = value;
                // *** Start programmer edit section *** (РегистрОборот.ПриходДенег Set end)

                // *** End programmer edit section *** (РегистрОборот.ПриходДенег Set end)
            }
        }
        
        /// <summary>
        /// Регистр оборот.
        /// </summary>
        // *** Start programmer edit section *** (РегистрОборот.РасходДенег CustomAttributes)

        // *** End programmer edit section *** (РегистрОборот.РасходДенег CustomAttributes)
        [PropertyStorage(new string[] {
                "РасходДенег"})]
        [NotNull()]
        public virtual IIS.Novyjj_2.РасходДенег РасходДенег
        {
            get
            {
                // *** Start programmer edit section *** (РегистрОборот.РасходДенег Get start)

                // *** End programmer edit section *** (РегистрОборот.РасходДенег Get start)
                IIS.Novyjj_2.РасходДенег result = this.fРасходДенег;
                // *** Start programmer edit section *** (РегистрОборот.РасходДенег Get end)

                // *** End programmer edit section *** (РегистрОборот.РасходДенег Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистрОборот.РасходДенег Set start)

                // *** End programmer edit section *** (РегистрОборот.РасходДенег Set start)
                this.fРасходДенег = value;
                // *** Start programmer edit section *** (РегистрОборот.РасходДенег Set end)

                // *** End programmer edit section *** (РегистрОборот.РасходДенег Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РегистрОборотE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РегистрОборотE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РегистрОборотE", typeof(IIS.Novyjj_2.РегистрОборот));
                }
            }
            
            /// <summary>
            /// "РегистрОборотL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РегистрОборотL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РегистрОборотL", typeof(IIS.Novyjj_2.РегистрОборот));
                }
            }
        }
    }
}
