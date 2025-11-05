package com.smartmeter.model;

import java.sql.Timestamp;

import javax.persistence.Embeddable;


/**
 * EventsDataId entity. @author MyEclipse Persistence Tools
 */
@Embeddable
public class EventsDataId  implements java.io.Serializable {


    // Fields    

     private static final long serialVersionUID = 1L;
	private String meterNo;
     private Timestamp eventDatetime;
     private String eventCode;


    // Constructors

    /** default constructor */
    public EventsDataId() {
    }

    
    /** full constructor */
    public EventsDataId(String meterNo, Timestamp eventDatetime, String eventCode) {
        this.meterNo = meterNo;
        this.eventDatetime = eventDatetime;
        this.eventCode = eventCode;
    }

   
    // Property accessors

    public String getMeterNo() {
        return this.meterNo;
    }
    
    public void setMeterNo(String meterNo) {
        this.meterNo = meterNo;
    }

    public Timestamp getEventDatetime() {
        return this.eventDatetime;
    }
    
    public void setEventDatetime(Timestamp eventDatetime) {
        this.eventDatetime = eventDatetime;
    }

    public String getEventCode() {
        return this.eventCode;
    }
    
    public void setEventCode(String eventCode) {
        this.eventCode = eventCode;
    }
   



   public boolean equals(Object other) {
         if ( (this == other ) ) return true;
		 if ( (other == null ) ) return false;
		 if ( !(other instanceof EventsDataId) ) return false;
		 EventsDataId castOther = ( EventsDataId ) other; 
         
		 return ( (this.getMeterNo()==castOther.getMeterNo()) || ( this.getMeterNo()!=null && castOther.getMeterNo()!=null && this.getMeterNo().equals(castOther.getMeterNo()) ) )
 && ( (this.getEventDatetime()==castOther.getEventDatetime()) || ( this.getEventDatetime()!=null && castOther.getEventDatetime()!=null && this.getEventDatetime().equals(castOther.getEventDatetime()) ) )
 && ( (this.getEventCode()==castOther.getEventCode()) || ( this.getEventCode()!=null && castOther.getEventCode()!=null && this.getEventCode().equals(castOther.getEventCode()) ) );
   }
   
   public int hashCode() {
         int result = 17;
         
         result = 37 * result + ( getMeterNo() == null ? 0 : this.getMeterNo().hashCode() );
         result = 37 * result + ( getEventDatetime() == null ? 0 : this.getEventDatetime().hashCode() );
         result = 37 * result + ( getEventCode() == null ? 0 : this.getEventCode().hashCode() );
         return result;
   }   





}