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
    /// Услуги.
    /// </summary>
    // *** Start programmer edit section *** (Услуги CustomAttributes)

    // *** End programmer edit section *** (Услуги CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("УслугиE", new string[] {
            "ID as \'ID\'",
            "Наименование as \'Наименование\'",
            "Стоимость as \'Стоимость\'"})]
    [View("УслугиL", new string[] {
            "ID as \'ID\'",
            "Наименование as \'Наименование\'",
            "Стоимость as \'Стоимость\'"})]
    public class Услуги : ICSSoft.STORMNET.DataObject
    {
        
        private int fID;
        
        private string fНаименование;
        
        private double fСтоимость;
        
        // *** Start programmer edit section *** (Услуги CustomMembers)

        // *** End programmer edit section *** (Услуги CustomMembers)

        
        /// <summary>
        /// ID.
        /// </summary>
        // *** Start programmer edit section *** (Услуги.ID CustomAttributes)

        // *** End programmer edit section *** (Услуги.ID CustomAttributes)
        public virtual int ID
        {
            get
            {
                // *** Start programmer edit section *** (Услуги.ID Get start)

                // *** End programmer edit section *** (Услуги.ID Get start)
                int result = this.fID;
                // *** Start programmer edit section *** (Услуги.ID Get end)

                // *** End programmer edit section *** (Услуги.ID Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуги.ID Set start)

                // *** End programmer edit section *** (Услуги.ID Set start)
                this.fID = value;
                // *** Start programmer edit section *** (Услуги.ID Set end)

                // *** End programmer edit section *** (Услуги.ID Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Услуги.Наименование CustomAttributes)

        // *** End programmer edit section *** (Услуги.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Услуги.Наименование Get start)

                // *** End programmer edit section *** (Услуги.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Услуги.Наименование Get end)

                // *** End programmer edit section *** (Услуги.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуги.Наименование Set start)

                // *** End programmer edit section *** (Услуги.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Услуги.Наименование Set end)

                // *** End programmer edit section *** (Услуги.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Стоимость.
        /// </summary>
        // *** Start programmer edit section *** (Услуги.Стоимость CustomAttributes)

        // *** End programmer edit section *** (Услуги.Стоимость CustomAttributes)
        public virtual double Стоимость
        {
            get
            {
                // *** Start programmer edit section *** (Услуги.Стоимость Get start)

                // *** End programmer edit section *** (Услуги.Стоимость Get start)
                double result = this.fСтоимость;
                // *** Start programmer edit section *** (Услуги.Стоимость Get end)

                // *** End programmer edit section *** (Услуги.Стоимость Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Услуги.Стоимость Set start)

                // *** End programmer edit section *** (Услуги.Стоимость Set start)
                this.fСтоимость = value;
                // *** Start programmer edit section *** (Услуги.Стоимость Set end)

                // *** End programmer edit section *** (Услуги.Стоимость Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "УслугиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УслугиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УслугиE", typeof(IIS.Novyjj_2.Услуги));
                }
            }
            
            /// <summary>
            /// "УслугиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View УслугиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("УслугиL", typeof(IIS.Novyjj_2.Услуги));
                }
            }
        }
    }
}
